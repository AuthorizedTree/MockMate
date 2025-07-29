export const interviewGenerationWorkflow = (userName: string, userId: string) => ({
  "name": "codefriend-voiceagent",
  "nodes": [
    {
      "name": "introduction",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -180.95371644428633,
          "y": -1204.08802694851
        }
      },
      "prompt": "Greet the user with the message above",
      "messagePlan": {
        "firstMessage": " Hello, {{username}}! Let me prepare your interview. I will ask you a few questions and generate a curated interview just for you. Are you ready?"
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753646260346",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -1020.5129611613509,
          "y": -81.30789499361936
        }
      },
      "prompt": "Ask the following questions one by one; let the user answer each one before asking the next question.\n\nAsk the user the role they are interviewing for (examples: frontend, backend, fullstack, mobile, devops, cloud, embedded, quality assurance, artificial intelligence, video game, etc.). These are not the only options, but examples of what the user might say.\n\nAsk the user the job experience level (examples: entry level software engineer, junior software engineer, senior software engineer, etc.). These are not the only options, but examples of what the user might say.\n\nAsk the user about the techstack they would like to be tested on. (examples: NumPy, Pandas, Matplotlib, TensorFlow, PyTorch, Scikit-learn, Requests, Beautiful Soup, D3.js, Lodash, OpenCV, React, Angular, Vue.js, jQuery, Node.js, Express.js, Django, Flask, Ruby on Rails, Laravel, Spring Boot, .NET Core/ASP.NET, Keras, Phoenix, Bootstrap, JDBC, SQLAlchemy, psycopg2, Mongoose, moment.js, datetime, JUnit, pytest, Jest, Serde, JSON, etc.). These are not the only options, but examples of what the user might say.\n\nAsk the user the type of interview they want (behavioural, technical, or mixed) . These are the only options, so when you ask this questions ask it in a way where you make it clear to the user that these are the 3 possible answers.\n\nAsk the user the number of questions they would like to be asked.\n",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "level",
            "description": "The job experience level."
          },
          {
            "enum": [],
            "type": "number",
            "title": "amount",
            "description": "The number of questions the interviewer asks the interviewee."
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "This consists of the technologies, libraries, and frameworks the interviewee would like to be tested on.  For example, React, Next.js, Express.js, Node and so on…"
          },
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": "This is the job role that the interviewee is applying for."
          },
          {
            "enum": [
              "behavioral",
              "technical",
              "mixed"
            ],
            "type": "string",
            "title": "type",
            "description": "This is the type of interview the interviewee wants to take. This includes behavioral, technical, and mixed."
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753646764611",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -181.43896650564432,
          "y": 1600.457793106665
        }
      },
      "prompt": "Say that the interview will begin shortly",
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "apiRequest_1753646819648",
      "type": "tool",
      "metadata": {
        "position": {
          "x": 224.35427681321266,
          "y": -311.52468111015946
        }
      },
      "tool": {
        "url": "https://codefriend-voiceagent.vercel.app/api/vapi/generate",
        "body": {
          "type": "object",
          "required": [],
          "properties": {
            "role": {
              "type": "string",
              "value": "",
              "description": ""
            },
            "type": {
              "enum": [
                "behavioural",
                "technical",
                "mixed"
              ],
              "type": "string",
              "value": "",
              "description": ""
            },
            "level": {
              "type": "string",
              "value": "",
              "description": ""
            },
            "amount": {
              "type": "number",
              "value": "",
              "description": ""
            },
            "userid": {
              "type": "string",
              "value": "",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "value": "",
              "description": ""
            }
          }
        },
        "name": "getUserData",
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "api_request_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "description": "API request tool"
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Please hold on. A request is being sent to the app.",
            "blocking": true
          },
          {
            "role": "assistant",
            "type": "request-complete",
            "content": "The request has been sent and your interview has been generated. Thank you for your call! Goodbye!",
            "endCallAfterSpokenEnabled": true
          },
          {
            "type": "request-failed",
            "content": "Uh oh! Looks like something went wrong while trying to send the data to the app! Please try again later!",
            "endCallAfterSpokenEnabled": true
          }
        ],
        "variableExtractionPlan": {
          "schema": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "aliases": []
        }
      }
    },
    {
      "name": "hangup_1753648243261",
      "type": "tool",
      "metadata": {
        "position": {
          "x": 225.16865696852562,
          "y": 204.73623468262477
        }
      },
      "tool": {
        "type": "endCall",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Everything should have been generated! You will be redirected to the interview dashboard now, thanks for the call! Good luck on your actual interview!",
            "blocking": true
          }
        ]
      }
    },
    {
      "name": "conversation_1753648280629",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 225.2934958378238,
          "y": -60.74134159938536
        }
      },
      "prompt": "Respond to user saying that interview has been generated and thank the user for the call",
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753799844155",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -181.2666510661478,
          "y": -328.42250737860763
        }
      },
      "prompt": "Ask the user the job experience level (examples: entry level software engineer, junior software engineer, senior software engineer, etc.). These are not the only options, but examples of what the user might say.\n",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "level",
            "description": "The job experience level."
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753799850133",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -179.70705984351653,
          "y": 163.65657322105358
        }
      },
      "prompt": "Ask the user about the techstack they would like to be tested on. (examples: NumPy, Pandas, Matplotlib, TensorFlow, PyTorch, Scikit-learn, Requests, Beautiful Soup, D3.js, Lodash, OpenCV, React, Angular, Vue.js, jQuery, Node.js, Express.js, Django, Flask, Ruby on Rails, Laravel, Spring Boot, .NET Core/ASP.NET, Keras, Phoenix, Bootstrap, JDBC, SQLAlchemy, psycopg2, Mongoose, moment.js, datetime, JUnit, pytest, Jest, Serde, JSON, etc.). These are not the only options, but examples of what the user might say.",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "This consists of the technologies, libraries, and frameworks the interviewee would like to be tested on.  For example, React, Next.js, Express.js, Node and so on…"
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753799854425",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -176.99903414519144,
          "y": 761.278473695039
        }
      },
      "prompt": "Ask the user the type of interview they want.\nThe possible answers are behavioural, technical, or mixed.",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [
              "behavioral",
              "technical",
              "mixed"
            ],
            "type": "string",
            "title": "type",
            "description": "This is the type of interview the interviewee wants to take. This includes behavioral, technical, and mixed."
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753799859681",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -179.5729266715823,
          "y": 1204.4795529086118
        }
      },
      "prompt": "Ask the user the number of questions they would like to be asked.",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "amount",
            "description": "The number of questions the interviewer asks the interviewee."
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    },
    {
      "name": "conversation_1753799943913",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -181.31586152446437,
          "y": -838.6351511084041
        }
      },
      "prompt": "Ask the user the role they are interviewing for (examples: frontend, backend, fullstack, mobile, devops, cloud, embedded, quality assurance, artificial intelligence, video game, etc.). These are not the only options, but examples of what the user might say.",
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": "This is the job role that the interviewee is applying for."
          }
        ]
      },
      "messagePlan": {
        "firstMessage": ""
      },
      "toolIds": []
    }
  ],
  "edges": [
    {
      "from": "conversation_1753646764611",
      "to": "apiRequest_1753646819648",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "apiRequest_1753646819648",
      "to": "conversation_1753648280629",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1753648280629",
      "to": "hangup_1753648243261",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1753799844155",
      "to": "conversation_1753799850133",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided the required variable"
      }
    },
    {
      "from": "conversation_1753799850133",
      "to": "conversation_1753799854425",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided the required variable"
      }
    },
    {
      "from": "conversation_1753799854425",
      "to": "conversation_1753799859681",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided the required variable"
      }
    },
    {
      "from": "conversation_1753799859681",
      "to": "conversation_1753646764611",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided the required variable"
      }
    },
    {
      "from": "conversation_1753799943913",
      "to": "conversation_1753799844155",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided the required variable"
      }
    },
    {
      "from": "introduction",
      "to": "conversation_1753799943913",
      "condition": {
        "type": "ai",
        "prompt": "if the user responds to the message"
      }
    }
  ],
  "globalPrompt": ""
});