import { useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";

type Props = {
    onComplete: (status: boolean) => void;
}

export function Splash({ onComplete}: Props){
    const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if(status.isLoaded){
            if(lastStatus.isLoaded !== status.isLoaded){
                hideAsync();
            }

            if(status.didJustFinish){
                onComplete(true);
            }
        }

        setStatus(() => status);
    }

    return (
        <Video 
            style={{ width: 400, height: 400, marginTop: 150, justifyContent: 'center', alignItems: 'center' }}
            resizeMode={ResizeMode.COVER}
            source={require('../../assets/robo.mp4')}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    );
}