export const buildJsonFromData = (
  applicationVersion,
  answer,
  demoGraphicInfo,
  surveyData,
  AMTCode
) => {
  surveyData.sort((a, b) => a.identifier - b.identifier);
  const dataObject = {
    applicationVersion: applicationVersion,
    assignmentAnswer: answer,
    demoGraphicInfo: demoGraphicInfo,
    surveyData: surveyData,
    AMTCode: AMTCode
  };
  const jsonObject = JSON.stringify(dataObject);
  return jsonObject;
};
