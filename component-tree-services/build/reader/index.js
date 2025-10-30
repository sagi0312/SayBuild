import { createClient } from "@supabase/supabase-js";
export class TreeReader {
    supabase;
    pageId;
    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_ANON_KEY;
        const pageId = process.env.PAGE_ID;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error("Missing Supabase environment variables");
        }
        if (!pageId) {
            throw new Error("Missing PAGE_ID environment variable");
        }
        this.supabase = createClient(supabaseUrl, supabaseKey);
        this.pageId = pageId;
    }
    /**
     * READ: Get the entire component tree from database
     */
    async getTree() {
        const { data, error } = await this.supabase
            .from("pages")
            .select("component_tree")
            .eq("id", this.pageId)
            .single();
        if (error) {
            throw new Error(`Failed to fetch tree: ${error.message}`);
        }
        return data.component_tree;
    }
}
export const treeReader = new TreeReader();
//# sourceMappingURL=index.js.map