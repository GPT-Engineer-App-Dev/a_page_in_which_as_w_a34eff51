import React, { useState } from "react";
import { Box, Select, Text, VStack, Heading } from "@chakra-ui/react";

const mockData = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Austin"],
    },
  },
  India: {
    currency: "INR",
    states: {
      Maharashtra: ["Mumbai", "Pune"],
      Karnataka: ["Bengaluru", "Mysore"],
    },
  },
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currency, setCurrency] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCurrency(mockData[country].currency);
    setStates(Object.keys(mockData[country].states));
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(mockData[selectedCountry].states[state]);
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">
        Country Selector
      </Heading>
      <Box>
        <Text>Select Country:</Text>
        <Select placeholder="Select country" onChange={handleCountryChange}>
          {Object.keys(mockData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </Box>
      {selectedCountry && (
        <Box>
          <Text>Currency: {currency}</Text>
        </Box>
      )}
      {states.length > 0 && (
        <Box>
          <Text>Select State:</Text>
          <Select placeholder="Select state" onChange={handleStateChange}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </Box>
      )}
      {cities.length > 0 && (
        <Box>
          <Text>Select City:</Text>
          <Select placeholder="Select city">
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
