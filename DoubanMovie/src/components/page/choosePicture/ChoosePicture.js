import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

/**
 * 从相机，或者相册中选择图片，展示出来
 */
export default class ChoosePicture extends Component {
  constructor(props) {
    super(props);
    // 保存选择图片的信息
    this.state = {
      avatarSource: {},
    };
  }

  // 选择图片或相册
  onClickChoosePicture = () => {
    const options = {
      title: '',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState({
          avatarSource: source,
        });
        console.warn(this.state.avatarSource.uri);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/*选择图片的按钮*/}
        <Text
          style={styles.textStyle}
          onPress={() => this.onClickChoosePicture()}>
          选择图片
        </Text>
        {/*展示图片*/}

        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    backgroundColor: '#66CCFF',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 10,
  },
  uploadAvatar: {
    width: 150,
    height: 150,
  },
});
