export type AIProvider = 'google' | 'anthropic' | 'openai' | 'openrouter';

export interface ModelConfig {
  id: string;
  name: string;
  provider: AIProvider;
  contextWindow: number;
  capabilities?: string[];
  supportsThinking?: boolean;
  byokRequired?: boolean;
}

export interface ProviderConfig {
  name: string;
  color: string;
  lightColor: string;
  models: ModelConfig[];
  description: string;
}

export interface UnifiedMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export const SUPPORTED_MODELS: ModelConfig[] = [
  { 
    id: 'gemini-3.5-flash', 
    name: 'Gemini 3.5 Flash', 
    provider: 'google', 
    contextWindow: 1048576,
    capabilities: ['Fast', 'Vision', 'Search Grounding'],
    supportsThinking: false,
    byokRequired: false
  },
  { 
    id: 'gemini-3.1-pro-preview', 
    name: 'Gemini 3.1 Pro', 
    provider: 'google', 
    contextWindow: 1000000,
    capabilities: ['Thinking', 'Deep Reasoning'],
    supportsThinking: true,
    byokRequired: false
  },
  {
    id: 'gemini-3.1-flash-lite',
    name: 'Gemini 3.1 Flash Lite',
    provider: 'google',
    contextWindow: 1000000,
    capabilities: ['Fast'],
    supportsThinking: false,
    byokRequired: false
  },
  { 
    id: 'claude-sonnet-5', 
    name: 'Claude Sonnet 5', 
    provider: 'anthropic', 
    contextWindow: 200000,
    capabilities: ['Agentic', 'Coding'],
    supportsThinking: false,
    byokRequired: true
  },
  { 
    id: 'claude-fable-5', 
    name: 'Claude Fable 5', 
    provider: 'anthropic', 
    contextWindow: 200000,
    capabilities: ['Mythos Reasoning'],
    supportsThinking: true,
    byokRequired: true
  },
  { 
    id: 'claude-opus-4-8', 
    name: 'Claude Opus 4.8', 
    provider: 'anthropic', 
    contextWindow: 200000,
    capabilities: ['Balanced'],
    supportsThinking: false,
    byokRequired: true
  },
  { 
    id: 'gpt-5.5', 
    name: 'GPT-5.5', 
    provider: 'openai', 
    contextWindow: 128000,
    capabilities: ['Multimodal'],
    supportsThinking: false,
    byokRequired: true
  },
  { 
    id: 'gpt-5.5-pro', 
    name: 'GPT-5.5 Pro', 
    provider: 'openai', 
    contextWindow: 128000,
    capabilities: ['Reasoning'],
    supportsThinking: true,
    byokRequired: true
  },
  { 
    id: 'gpt-5.4', 
    name: 'GPT-5.4', 
    provider: 'openai', 
    contextWindow: 128000,
    capabilities: ['Standard'],
    supportsThinking: false,
    byokRequired: true
  },
  { 
    id: 'gpt-5.4-mini', 
    name: 'GPT-5.4 Mini', 
    provider: 'openai', 
    contextWindow: 128000,
    capabilities: ['Fast'],
    supportsThinking: false,
    byokRequired: true
  },
  // OpenRouter Free Models
  {
    id: 'qwen/qwen3-coder-480b-a35b:free',
    name: 'Qwen3 Coder 480B (Free)',
    provider: 'openrouter',
    contextWindow: 32000,
    capabilities: ['Coding', 'Fast'],
    supportsThinking: false,
    byokRequired: true
  },
  {
    id: 'deepseek/deepseek-r1:free',
    name: 'DeepSeek R1 (Free)',
    provider: 'openrouter',
    contextWindow: 32000,
    capabilities: ['Reasoning', 'Debug'],
    supportsThinking: false,
    byokRequired: true
  },
  {
    id: 'deepseek/deepseek-v4-flash:free',
    name: 'DeepSeek V4 Flash (Free)',
    provider: 'openrouter',
   ,
  openrouter: {
    name: 'OpenRouter',
    color: 'purple',
    lightColor: 'purple-400',
    description: 'Free programming models',
    models: SUPPORTED_MODELS.filter(m => m.provider === 'openrouter')
  } contextWindow: 32000,
    capabilities: ['Fast', 'General'],
    supportsThinking: false,
    byokRequired: true
  },
  {
    id: 'google/gemma-4-31b:free',
    name: 'Gemma 4 31B (Free)',
    provider: 'openrouter',
    contextWindow: 32000,
    capabilities: ['Docs', 'General'],
    supportsThinking: false,
    byokRequired: true
  },
  {
    id: 'cohere/north-mini-code:free',
    name: 'North Mini Code (Free)',
    provider: 'openrouter',
    contextWindow: 16000,
    capabilities: ['CLI', 'Terminal'],
    supportsThinking: false,
    byokRequired: true
  }
];

export const PROVIDER_CONFIG: Record<AIProvider, ProviderConfig> = {
  google: {
    name: 'Google',
    color: 'indigo',
    lightColor: 'indigo-400',
    description: 'Fast and versatile',
    models: SUPPORTED_MODELS.filter(m => m.provider === 'google')
  },
  anthropic: {
    name: 'Anthropic',
    color: 'amber',
    lightColor: 'amber-400',
    description: 'Thoughtful reasoning',
    models: SUPPORTED_MODELS.filter(m => m.provider === 'anthropic')
  },
  openai: {
    name: 'OpenAI',
    color: 'emerald',
    lightColor: 'emerald-400',
    description: 'Powerful and multimodal',
    models: SUPPORTED_MODELS.filter(m => m.provider === 'openai')
  }
};
