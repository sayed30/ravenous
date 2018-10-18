import React from 'react';


//api key
const apikey = '5ZNQZ8kCSHEhJ2wtdhVbhptpwyggAcYQy9KNYSISkg27ZtWZJKJNjEC6RZL5Kgr6BKfLctsPMQx9RciE2H2wk1LsWbDoJflrwS6IsdZ3b4Yu2FjazYcbYJ-JyLqyW3Yx';


const Yelp = {

    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apikey}`
        }
      }).then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse
            .businesses
            .map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories.title,
                rating: business.rating,
                reviewCount: business.review_count
              }
            });
        }
      })
    }
  };
  export default Yelp;