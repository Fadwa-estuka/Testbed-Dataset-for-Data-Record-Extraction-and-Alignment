function LegacyPlusGenealogyControl(params) {
    var genealogyData = params.GenealogyData;

    try {
        if (genealogyData) {
            deleteExtraneousKeyValuePairs();

            //Check for existing data before overwriting

            LP.GetGenealogyData(function (data) {
                if (data) {
                    if (genealogyData.SearchData) {
                        data.SearchData = genealogyData.SearchData;
                    }
                    else {
                        data.ResearchObitData = genealogyData.ResearchObitData;
                    }

                    var updatedJSON = JSON.stringify(data);
                    LP.SaveGenealogyData(updatedJSON);
                }
                else {
                    var genealogyDataJson = JSON.stringify(genealogyData);
                    LP.SaveGenealogyData(genealogyDataJson);
                }
            });
        }
    }
    catch (e) {
    }

    function deleteExtraneousKeyValuePairs() {
        delete genealogyData['KeyValue'];
        delete genealogyData['DisplayName'];
        if (genealogyData.SearchData != undefined) {
            delete genealogyData['SearchData']['KeyValue'];
            delete genealogyData['SearchData']['DisplayName'];
        }
        if (genealogyData.ResearchObitData != undefined) {
            delete genealogyData['ResearchObitData']['KeyValue'];
            delete genealogyData['ResearchObitData']['DisplayName'];
        }
    }
}