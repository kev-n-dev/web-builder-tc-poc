// src/Editor.tsx
import React from 'react';
import { Editor, Frame, Canvas } from '@craftjs/core';
import {  Text } from './user/Text';
import {  Container } from './user/Container';
import { Button } from 'antd';


const WebBuilderEditor: React.FC = () => {
  return (
    <Editor>
      <Frame>
        <Canvas>
          <Container background="#f0f0f0" padding={20}>
            <Text text="Welcome to the Web Builder" fontSize="24px" />
          </Container>
        </Canvas>
      </Frame>
    </Editor>
  );
};

export default WebBuilderEditor;
