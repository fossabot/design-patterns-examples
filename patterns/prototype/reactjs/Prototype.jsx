import React, { useState } from 'react';

// Prototype class
class Document {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  clone() {
    return new Document(this.title, this.content);
  }
}

// Component
const PrototypeExample = () => {
  const [documents, setDocuments] = useState([
    new Document('Original Document', 'This is the original content')
  ]);

  const cloneDocument = (doc) => {
    const cloned = doc.clone();
    cloned.title = `${doc.title} (Clone)`;
    setDocuments([...documents, cloned]);
  };

  return (
    <div className="prototype-example">
      <h2>Prototype Pattern</h2>
      {documents.map((doc, index) => (
        <div key={index} className="document">
          <h3>{doc.title}</h3>
          <p>{doc.content}</p>
          <button onClick={() => cloneDocument(doc)}>Clone</button>
        </div>
      ))}
    </div>
  );
};

export default PrototypeExample;
