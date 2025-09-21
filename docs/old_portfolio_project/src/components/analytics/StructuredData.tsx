import React, { useId } from 'react';

interface IStructuredDataProps {
  structuredData: any;
}
const StructuredData = ({ structuredData }: IStructuredDataProps) => {
  const scriptId = useId();

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
