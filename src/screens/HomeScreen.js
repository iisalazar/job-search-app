import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";

import CustomScrollView from "../components/CustomScrollView";

import SearchBarComponent from "../components/SearchBarComponent";
import JobCard from "../components/JobCardComponent";
import CategoryCard from "../components/CategoryCardComponent";




// KFC 		- https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png
// Google - https://cdn.worldvectorlogo.com/logos/google-icon.svg
// Airbnb - https://vectorified.com/image/airbnb-vector-logo-11.png
function HomeScreen({ navigation }) {
	const Jobs = [
		{
			type: "Part-Time",
			title: "Junior Franchise Manager",
			lastPosted: "5 days ago",
			company: "KFC",
			logoUri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
		},
		{
			type: "Full-Time",
			title: "Senior Project Manager",
			lastPosted: "6 days ago",
			company: "Google",
			logoUri: "https://i.dlpng.com/static/png/6909571_preview.png"
		},
		{
			type: "Full-Time",
			title: "Visual Product Designer",
			lastPosted: "3 days ago",
			company: "Airbnb",
			logoUri: "https://vectorified.com/image/airbnb-vector-logo-11.png"
		}
	]
	const JobCardList = Jobs.map( ({type, title, lastPosted, company, logoUri}, index) => (
	      			<JobCard 
	      				key={ index }
	      				type={type} 
	      				title={title} 
	      				lastPosted={lastPosted}
	      				company={ company }
	      				logoUri={logoUri}
	      			/>
	      		)) 
  return (
  	<View style={ styles.wrapper }>
    	<ScrollView contentContainerStyle={ styles.container }>
    		<Text style={{ ...textStyles.heading1, marginBottom: 20 }}>Find your Job</Text>
	      <SearchBarComponent />
	      
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Popular Search</Text>
	      </View>
	      <CustomScrollView>
	      	{ JobCardList }
	      </CustomScrollView>
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Categories</Text>
	      </View>
	      <CustomScrollView>
	      	<CategoryCard type="designer" />
	      	<CategoryCard type="developer" />
	      	<CategoryCard type="accounting" />
	      </CustomScrollView>
    	</ScrollView>
  	</View>
  );
}


export default HomeScreen;