define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/sites/:site_id/polls/:poll_id/responses",
    "title": "",
    "name": "GetPollResponses",
    "group": "Poll",
    "description": "<p>Get all the responses available for a poll.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "site_id",
            "description": "<p>The site ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "poll_id",
            "description": "<p>The poll ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example response",
          "content": "{\n    \"responses\": [\n        {\n            \"country_name\": \"Sweden\",\n            \"country_code\": \"SV\",\n            \"created_epoch_time\": 1432685571,\n            \"index\": 1,\n            \"response_path\": \"/\"\n        }\n    ]\n    \"firstname\": \"John\",\n    \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "insights/views/polls_api.py",
    "groupTitle": "Poll"
  },
  {
    "type": "post",
    "url": "/api/v1/sites/:site_id/polls",
    "title": "",
    "name": "PostPolls",
    "group": "Poll",
    "description": "<p>Create a new poll.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "site_id",
            "description": "<p>The site ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Examples request",
        "content": "{\n    \"site_id\": 1,\n    \"name\": \"Polly,\n    \"show_branding\": true\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example response",
          "content": "{\n    \"responses\": [\n        {\n            \"country_name\": \"Sweden\",\n            \"country_code\": \"SV\",\n            \"created_epoch_time\": 1432685571,\n            \"index\": 1,\n            \"response_path\": \"/\"\n        }\n    ]\n    \"firstname\": \"John\",\n    \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "insights/views/polls_api.py",
    "groupTitle": "Poll"
  },
  {
    "type": "get",
    "url": "/api/v1/sites/:site_id/surveys",
    "title": "",
    "name": "GetSurveys",
    "group": "Survey",
    "description": "<p>Get all the existing surveys for a site.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "site_id",
            "description": "<p>The site ID.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example response",
          "content": "[\n    {\n        \"id\": 1,\n        \"created_epoch_time\": 1432685571,\n        \"enabled\": true,\n        \"name\": \"Survey\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "insights/views/survey_api.py",
    "groupTitle": "Survey"
  }
] });