interface StructuredDataObject {
  [key: string]: StructuredDataValue
}

type StructuredDataValue =
  | string
  | number
  | boolean
  | null
  | StructuredDataValue[]
  | StructuredDataObject

interface StructuredDataProps {
  data: StructuredDataObject
  id?: string
}

export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  )
}

