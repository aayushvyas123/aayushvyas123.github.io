export interface GraphNode {
  id: string;
  label: string;
  blurb: string;
  x: number;
  y: number;
  captionSide: "top" | "bottom";
}

export const centerNode = { label: "AI Engineering", x: 50, y: 50 };

export const graphNodes: GraphNode[] = [
  {
    id: "llm",
    label: "LLM Applications",
    blurb: "Building product features on top of large language models.",
    x: 50,
    y: 12,
    captionSide: "top",
  },
  {
    id: "mcp",
    label: "MCP",
    blurb: "Structured, secure access from models to real tools and data.",
    x: 86,
    y: 38,
    captionSide: "bottom",
  },
  {
    id: "rag",
    label: "RAG Systems",
    blurb: "Grounding generation in retrieved, up-to-date context.",
    x: 72,
    y: 81,
    captionSide: "bottom",
  },
  {
    id: "agents",
    label: "Agentic Workflows",
    blurb: "Composable, tool-using agents that complete multi-step tasks.",
    x: 28,
    y: 81,
    captionSide: "bottom",
  },
  {
    id: "cloud",
    label: "Cloud Architecture",
    blurb: "Scalable infrastructure to run AI workloads reliably.",
    x: 14,
    y: 38,
    captionSide: "bottom",
  },
];

// Outer ring connections, drawn fainter than the center spokes.
export const ringEdges: [string, string][] = [
  ["llm", "mcp"],
  ["mcp", "rag"],
  ["rag", "agents"],
  ["agents", "cloud"],
  ["cloud", "llm"],
];
