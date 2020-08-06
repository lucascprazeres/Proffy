import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => (
  <Container className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest}/>
  </Container>
);

export default Textarea;