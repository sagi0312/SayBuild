// app/api/tree/usage.ts
import { DAILY_LIMIT } from "@saybuild/shared";
import type { SupabaseClient } from "@supabase/supabase-js";

export async function checkAndIncrementUsage(
  supabase: SupabaseClient,
  userId: string
) {
  const today = new Date().toISOString().split("T")[0];

  const { data: usage } = await supabase
    .from("user_usage")
    .select("command_count")
    .eq("user_id", userId)
    .eq("date", today)
    .single();

  if (usage && usage.command_count >= DAILY_LIMIT) {
    return {
      allowed: false,
      error: {
        error: "Daily limit reached",
        limit: DAILY_LIMIT,
        used: usage.command_count,
        resetsAt: new Date(today + "T00:00:00Z").getTime() + 86400000,
      },
    };
  }

  // Increment usage
  await supabase.from("user_usage").upsert(
    {
      user_id: userId,
      date: today,
      command_count: (usage?.command_count || 0) + 1,
    },
    {
      onConflict: "user_id,date",
    }
  );

  return { allowed: true };
}
