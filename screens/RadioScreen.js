import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Alert, Linking, View, Image, } from "react-native";
import { IconButton, Text, Button } from 'react-native-paper';
import { Surface } from 'react-native-paper';
import { styles } from "../styles";
import { radioStore } from "../_store";
import { radioActions } from "../_actions";

const RadioScreen = ({ }) => {

    useEffect(() => {
        radioActions.init();
        return ()=>{
            console.log('close')
            radioActions.close();
          }
    }, []);

    const social = [
        { id: 1, icon: 'vk', color: 'rgb(76, 117, 163)', link: 'https://vk.com/golosnadezhdi' },
        { id: 2, icon: 'youtube', color: 'rgb(255,0,0)', link: 'https://www.youtube.com/user/golosnadezhdi' },
        { id: 3, icon: 'facebook', color: 'rgb(66,103,178)', link: 'https://www.facebook.com/golosnadezhdi' },
        { id: 4, icon: 'instagram', color: 'rgb(131,58,180)', link: 'https://www.instagram.com/golosnadezhdi/' },
        { id: 5, icon: 'odnoklassniki', color: 'rgb(255, 152, 0)', link: 'https://ok.ru/golosnadezhdi' },
    ];

    const openLink = async (url) => {
        try {
            await Linking.openURL(url);
        } catch (error) {
            Alert.alert(error);
        }
    };

    return (
        <Surface style={{ flex: 1 }}>
            <View style={styles.playerBody}>
                <View style={styles.radioImageContainer}>
                    <Image
                        style={styles.radioImage}
                        source={require('../assets/radio_circle.png')}
                    />
                    <View style={{ flexDirection: 'row'}}>
                        <Button  mode={!radioStore.stream_type? "contained" : "outlined"} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} color={'#3597cd'} onPress={() => radioActions.setStreamGolos()}>{'Прямой эфир'}</Button>
                        <Button  mode={radioStore.stream_type? "contained" : "outlined"} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} color={'#3597cd'} onPress={() => radioActions.setStreamMolodesh()}>{'Музыка'}</Button>
                    </View>
                </View>

                <Text style={styles.currentTextTitle}>{radioStore.radio_player && radioStore.radio_player.title}</Text>

            </View>
            {/* <View style={styles.playerFooter}>
                <Button mode="outlined" color={'#00f39b'} onPress={() => openLink('https://golosn.ru/pozhertvovat')}>Пожертвовать</Button>
            </View> */}
            
            <View style={styles.playerActions}>

                <IconButton
                    icon={radioStore.mute ? "volume-high" : "volume-mute"}
                    size={30}
                    onPress={() => !radioStore.mute ? radioActions.mute() : radioActions.unmute()}
                />
                <IconButton
                    icon={radioStore.play ? "pause" : "play"}
                    size={40}
                    style={styles.playButton}
                    onPress={() => { !radioStore.play ? radioActions.play() : radioActions.pause() }}
                />
                <IconButton
                    icon={radioStore.quality ? "quality-low" : "quality-high"}
                    size={30}
                    onPress={() => !radioStore.quality ? radioActions.setHQRadio(radioStore.stream_type) : radioActions.setLQRadio(radioStore.stream_type)}
                />
            </View>

            <View style={[styles.socialBody]}>
                {social.map((item, index) => (
                    <IconButton
                        key={item.id}
                        icon={item.icon}
                        color={item.color}
                        size={30}
                        onPress={() => openLink(item.link)}
                    />
                ))

                }

            </View>
        </Surface>
    )
}

const oRadioScreen = observer(RadioScreen)
export { oRadioScreen as RadioScreen }