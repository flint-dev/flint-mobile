import { View, Text, TextInput, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Styles from "./styles";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function DestinationSearch() {
    
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);


    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn("Redirect to results");
        }
    }, []);

	return (
		<SafeAreaView>
            <View style={Styles.container}>
                
            <GooglePlacesAutocomplete
					placeholder="Where from?"
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
                        setOriginPlace({data, details})
						// console.log(data, details);
                    }}
                    styles={{
                        textInput:Styles.textInput
                    }}
                    fetchDetails
					query={{
						key: "AIzaSyA7q0zF_2_rCjVuhRDn52NtkOcM3K7t53k",
						language: "en",
					}}
				/>
				
				<GooglePlacesAutocomplete
					placeholder="Where to?"
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
                        setDestinationPlace({data, details})
						// console.log(data, details);
                    }}
                    styles={{
                        textInput:Styles.textInput
                    }}
                    fetchDetails
					query={{
						key: "AIzaSyA7q0zF_2_rCjVuhRDn52NtkOcM3K7t53k",
						language: "en",
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
