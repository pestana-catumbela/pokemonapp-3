import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    align-items: center;
    justify-content: center;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
`;

export const ContainerPagination = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ListItem = styled.View`
    gap: 6px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 0.4px #808080;
`;

export const Name = styled.Text`
    font-size: 15px;
    font-weight: 500px;
`;

export const Url = styled.Text`
    font-size: 14px;
`;

export const Image = styled.Image`
    width: 300px;
    height: 300px;
`;

export const IncrementNumber = styled.Text`
    font-size: 16px;
    font-weight: 500px;
    margin-horizontal: 6px;
`;
