import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import 'survey-creator/survey-creator.css';
import {find} from 'lodash-es';
Survey.Survey.cssType = "bootstrap";



const mergeQuestionTypes = function (questionTypes, defaults) {
  // Assemble a list of question types with all the relevant properties, by combining surveyjs's
  // defaults with our overrides
  return questionTypes.map(function (questionType) {
    let defaultQuestionType = find(defaults, ['name', questionType.name]) || {};

    return Object.assign(defaultQuestionType, questionType);
  });
};

function attachSurveyEditor(el) {
  const questionTypes = require("./surveyQuestionTypes").default;

  const editorOptions = {
    // showPropertyGrid: false,
  };

  let editor = new SurveyCreator.SurveyCreator(el, editorOptions);

  // Add our user-defined questions, and clear out the prior items
  editor.toolbox.addItems(mergeQuestionTypes(questionTypes, editor.toolbox.items), true);

  // Prevent users from creating a question with too long a name
  // editor.onPropertyValidationCustomError.add(questionValidator);
  return editor;
}

attachSurveyEditor('app');
