import React from 'react';
import Layout from '~components/Layout';
import Box from '~components/Box';
import useMoveBox from '~hooks/useMoveBox';
import {GestureDetector} from 'react-native-gesture-handler';

const MoveBox: React.FC = () => {
  const moveBox = useMoveBox();

  return (
    <Layout title="Move box">
      <GestureDetector gesture={moveBox.gesture}>
        <Box label="Move me" style={moveBox.style} />
      </GestureDetector>
    </Layout>
  );
};

export default MoveBox;
