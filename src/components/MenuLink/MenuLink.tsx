import React from 'react';
import {Box, Center, HStack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface MenuItemProps {
  to: string;
  label: string;
}

const MenuLink: React.FC<MenuItemProps> = ({to, label}) => {
  const navigation = useNavigation();

  const openLink = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableOpacity onPress={openLink}>
      <Box shadow="3" p="2" m="2" borderRadius="md" bg="white">
        <Center>
          <HStack space="2" my="2" alignItems="center">
            <Text fontSize="md">🙈</Text>
            <Text fontSize="md" fontWeight="bold" color="#333">
              {label}
            </Text>
          </HStack>
        </Center>
      </Box>
    </TouchableOpacity>
  );
};

export default MenuLink;
