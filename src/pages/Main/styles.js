import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #fefefe;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ddd;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const ErrorText = styled.Text`
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
  color: #f34046;
  font-weight: bold;
  font-size: 16px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  position: relative;
  align-items: center;
  background: #fefefe;
  border-radius: 4px;
  padding: 20px;
  margin-top: 15px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const RemoveButton = styled(BorderlessButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 15px;
  width: 30px;
  height: 30px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 20px;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
