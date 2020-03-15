import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import "./App.css";

function App() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <PageContainer>
      <Hero>
        <HeroHeader>Victoria's thesis</HeroHeader>
        <HeroDescription>
          Drop your photo below (1:1 ratio and .jpg)
        </HeroDescription>
        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <HeroDescription>Drop the files here ...</HeroDescription>
          ) : (
            <HeroDescription>
              Drag 'n' drop some files here, or click to select files
            </HeroDescription>
          )}
        </DropzoneContainer>
      </Hero>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Hero = styled.div`
  padding-top: 128px;
  width: 50%;
  margin: 0 auto;
`;

const HeroHeader = styled.h1`
  text-align: center;
`;

const HeroDescription = styled.h3`
  text-align: center;
`;

const DropzoneContainer = styled.div`
  margin-top: 48px;
  border: 1px solid #acacac;
  border-radius: 5px;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
