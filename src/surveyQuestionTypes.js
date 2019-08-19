import * as SurveyCreator from "survey-creator";
import * as Survey from "survey-knockout";
import * as widgets from 'surveyjs-widgets';
import "nouislider/distribute/nouislider.min.css";

widgets.nouislider(Survey);
widgets.signaturepad(Survey);


SurveyCreator
  .SurveyQuestionEditorDefinition
  .definition["nouislider"] = {
  properties: [
    {
      name: "defaultValue",
      title: "Starting Value"
    },
    {
      name: "step",
      title: "Step"
    },
    {
      name: "rangeMin",
      title: "Range Min"
    },
    {
      name: "rangeMax",
      title: "Range Max"
    },
  ]
};


export default [
  // {
  //   name: 'panel',
  // },
  // {
  //   name: 'html',
  // },
  // {
  //   name: 'text',
  // },
  // {
  //   name: 'comment',
  // },
  // {
  //   name: 'dropdown',
  // },
  // {
  //   name: 'radiogroup',
  // },
  // {
  //   name: 'checkbox',
  // },
  // {
  //   name: 'yesno',
  //   title: 'Yes/No',
  //   iconName: 'icon-dropdown',
  //   json: {
  //     type: 'dropdown',
  //     name: 'q1',
  //     choices: ['Yes', 'No']
  //   }
  // },
  // {
  //   name: 'truefalse',
  //   title: 'True/False',
  //   iconName: 'icon-dropdown',
  //   json: {
  //     type: 'dropdown',
  //     name: 'q1',
  //     choices: ['True', 'False']
  //   }
  // },
  // {
  //   name: 'rating',
  // },
  // {
  //   name: 'matrix',
  // },
  // {
  //   name: 'matrixdropdown'
  // },
  {
    name: 'nouislider',
    iconName: 'icon-nouislider',
    title: 'Slider',
    json: {
      type: 'nouislider',
      isRequired: true,
      rangeMin: '1',
      rangeMax: '10',
      pipsMode: "steps",
      pipsValues: null,
      pipsDensity: '1'
    }
  }
];
