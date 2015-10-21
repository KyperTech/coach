import _ from 'lodash';
//Options: trace, debug, info, warn, error, fatal
//Set default log level to debug
let logLevel = 'debug';
let displayLogTypes = setupLogTypes();

let logger = {
	log(logData) {
    return runLog('log', logData);
	},
	info(logData) {
    return runLog('info', logData);
	},
	warn(logData) {
    return runLog('warn', logData);
	},
	debug(logData) {
    return runLog('debug', logData);
	},
	error(logData) {
    return runLog('error', logData);
	}
};

export default logger;

function runConsoleMethod(methodName, methodData) {
	//Safley run console methods or use console log
	if (methodName && console[methodName]) {
		return console[methodName].apply(console, methodData);
	} else {
		return console.log.apply(console, methodData);
	}
}
function buildMessageArgs(logData) {
	var msgStr = '';
	var msgObj = {};
	//TODO: Attach time stamp
	//Attach location information to the beginning of message
	if (_.isObject(logData)) {
		if (logLevel == 'debug') {
			if (_.has(logData, 'func')) {
				if (_.has(logData, 'obj')) {
					//Object and function provided
					msgStr += `[${logData.obj}.${logData.func}()]\n `;
				} else if (_.has(logData, 'file')) {
					msgStr += `[${logData.file} > ${logData.func}()]\n `;
				} else {
					msgStr += `[${logData.func}()]\n `;
				}
			}
		}
		//Print each key and its value other than obj and func
		_.each(_.omit(_.keys(logData)), (key, ind, list) => {
			if (key != 'func' && key != 'obj') {
				if (key == 'description' || key == 'message') {
					msgStr += logData[key];
				} else if (_.isString(logData[key])) {
					// msgStr += key + ': ' + logData[key] + ', ';
					msgObj[key] = logData[key];
				} else {
					//Print objects differently
					// msgStr += key + ': ' + logData[key] + ', ';
					msgObj[key] = logData[key];
				}
			}
		});
		msgStr += '\n';
	} else if (_.isString(logData)) {
		msgStr = logData;
	}
	var msg = [msgStr, msgObj];

	return msg;
}
function setupLogTypes() {
  let displayLogTypes = {debug:true, info: true, log: true, warn: true, error: true};
  switch(logLevel.toLowerCase()){
    case 'info':
      displayLogTypes.debug = false;
      break;
    case 'warn':
      displayLogTypes.debug = false;
      displayLogTypes.log = false;
      break;
    case 'error':
      displayLogTypes.debug = false;
      displayLogTypes.log = false;
      displayLogTypes.warn = false;
      break;
    default:
      displayLogTypes.debug = false;
      displayLogTypes.info = false;
      displayLogTypes.log = false;
  }
  return displayLogTypes;
}
function logShouldDisplay(type) {
  return displayLogTypes[type];
}
function runLog(type, logConfig) {
  //Accept object {type: 'log', data:}
  let msgArgs = buildMessageArgs(logData);
  if (logShouldDisplay(type)) {
    runConsoleMethod(type, msgArgs);
  }
}
