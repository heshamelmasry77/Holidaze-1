/**
 *
 * @param {*} data
 * @param {*} largerScreen
 * @returns
 */

function getFeaturedVenues(data, largerScreen) {
  let recommendedData = [];
  let allowPetsData = [];

  if (data && data.length && data.name != "") {
    const filterByMedia = data.filter((item) => {
      if (item.media.length > 0) {
        return item;
      }
    });

    for (let i = 0; i < filterByMedia.length; i++) {
      if (i <= 3 && largerScreen) {
        recommendedData.push(filterByMedia[i]);
      }
      if (i <= 9 && !largerScreen) {
        recommendedData.push(filterByMedia[i]);
      }
    }
    const filterByPets = data.filter((item) => {
      if (item.meta.pets) {
        return item;
      }
    });
    for (let i = 0; i < filterByPets.length; i++) {
      if (i <= 8 && largerScreen) {
        allowPetsData.push(filterByPets[i]);
      }
      if (i <= 9 && !largerScreen) {
        allowPetsData.push(filterByPets[i]);
      }
    }
    return {
      recommendedData,
      allowPetsData,
    };
  }
}

export default getFeaturedVenues;
