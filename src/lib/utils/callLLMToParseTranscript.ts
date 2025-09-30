type PropertyMap = {
  [key: string]: string | number;
};
export type TreeNode = {
  operation: "create" | "update" | "delete";
  componentType: "Box" | "Text" | "Button";
  location?: string;
  propertyMap?: PropertyMap;
};

export function callLLMToParseTranscript(transcript: string): TreeNode[] {
  return null as any;
}
