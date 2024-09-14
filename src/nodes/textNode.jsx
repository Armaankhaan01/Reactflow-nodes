import { useState } from 'react';
import { BaseNode } from '../BaseNode.jsx';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { type: 'source', position: 'Right', idSuffix: 'output' }
  ];

  return (
    <BaseNode id={id} data={data} label="Text" handles={handles}>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
    </BaseNode>
  );
};
