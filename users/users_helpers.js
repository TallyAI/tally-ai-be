const formatUserData = data => {
    console.log("Data in formatUserData:\n", data);

    const formatted = {
        user_id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        preferences: data.preferences,
        /* Once we set up the model to account for multiple businesses,
            change the following to a map: */
        businesses: data.businesses.map(business => ({
            id: business.id,
            name: business.name,
            city: business.city,
            state: business.state,
            yelp: {
                yelp_id: business.yelp_id,
                url: business.url,
                image_url: business.image_url
            }
        })),
        favorites: data.favorites.length
            ? data.favorites.map(favorite => ({
                id: favorite.id,
                name: favorite.name,
                city: favorite.city,
                state: favorite.state,
                yelp: {
                    yelp_id: favorite.yelp_id,
                    url: favorite.url,
                    image_url: favorite.image_url
                }
            }))
            : []
    };
    console.log("Formatted data in formatUserData:\n", formatted);
    return formatted;
};

const formatBusinesses = data => data.businesses.map(business => ({
    id: business.id,
    name: business.name,
    city: business.city,
    state: business.state,
    yelp: {
        yelp_id: business.yelp_id,
        url: business.url,
        image_url: business.image_url
    }
}))


module.exports = {
    formatUserData
}