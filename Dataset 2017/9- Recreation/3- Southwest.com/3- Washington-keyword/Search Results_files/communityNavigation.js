function createSWAMember(id, creationDate, destWCitiesId, homeCity, aboutMe, favoritesArray) {
	var profileCreationDate = parseDate(creationDate);
	var profileDestinationArray = new Array(destWCitiesId);
	var profileActivitiesArray = favoritesArray;

	var SWAMember = new Object();
	SWAMember = {
		userId:id,
		memberSince:profileCreationDate,
		location:homeCity,
		aboutMe:aboutMe,
		favoriteDestinationId:profileDestinationArray,
		favoriteActivityId:profileActivitiesArray
	};

	return SWAMember;
}

function parseDate(date) {
	var adata = date.split('-');
	var aaaa = parseInt(adata[0], 10);
	var mm = parseInt(adata[1], 10);
	var dd = parseInt(adata[2], 10);
	return new Date(aaaa, mm-1, dd);
}
