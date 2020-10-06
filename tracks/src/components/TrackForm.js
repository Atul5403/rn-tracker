import React, { useContext } from 'react'
import Spacer from './Spacer'
import { Button, Input } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={(name) => changeName(name)}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  )
}

export default TrackForm
