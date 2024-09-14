import { BaseNode } from '../BaseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: 'Left', idSuffix: 'system', style: { top: `${100 / 3}%` } },
    { type: 'target', position: 'Left', idSuffix: 'prompt', style: { top: `${200 / 3}%` } },
    { type: 'source', position: 'Right', idSuffix: 'response' }
  ];

  return (
    <BaseNode id={id} data={data} label="LLM" handles={handles}>
      <div>
        <span>This is an LLM.</span>
      </div>
    </BaseNode>
  );
};
