
import translate from "./translate.js"; // Translation for boot process
import "./view.js";
import bootloader from "Js/bootloader/index.js"; // Page loader
import auth from "Js/auth"; // Authentification module
import "Js/signup"; // For user registration
import "Js/menu"; // For burger menu
import settings from "Js/settings";
import selection from "Js/selection";
import statistics from "Js/statistics";
import history from "Js/history";
import core from "Js/core";
import model from "./model.js";

// Log first message
const versionId = bootloader.log('Elephantizer v2');
bootloader.setSuccess(versionId);




// Wait for authentification
const authId = bootloader.log(translate.authentification);
await auth.waitForAuthCompleted();
bootloader.setSuccess(authId);

// Wait for settings
const settingsId = bootloader.log(translate.settings);
await settings.init();
bootloader.setSuccess(settingsId);

// Load selection from URL path
const fromUrlPath = model.getFromUrl();
if (fromUrlPath !== undefined) {
  const loadFromUrlPathId = bootloader.log(translate.loadFromUrlPath.replace('<%=path%>', fromUrlPath));
  await selection.set([fromUrlPath]);
  bootloader.setSuccess(loadFromUrlPathId);
}

// Load selection from URL query
const fromUrlQuery = model.getFromUrlQuery();
if (fromUrlQuery.length) {
  const loadFromUrlQueryId = bootloader.log(translate.loadFromUrlQuery.replace('<%=n%>', fromUrlQuery.length));
  await selection.set(fromUrlQuery);
  bootloader.setSuccess(loadFromUrlQueryId);
}

// Load default selection if user is not logged and no valid URL query is provided
if (selection.current().length === 0) {
  const defaultSeriesId = bootloader.log(translate.defaultSeries);
  const loaded = await selection.loadDefaultSelection()
  if (loaded) bootloader.setSuccess(defaultSeriesId); else bootloader.setError(defaultSeriesId);
}

// Wait for statistics
const statisticsId = bootloader.log(translate.statistics);
await statistics.init();
bootloader.setSuccess(statisticsId);

// Wait for history
const historyId = bootloader.log(translate.history);
await history.startListeningDB();
bootloader.setSuccess(historyId);

// Populate the interface for the first questions
const coreId = bootloader.log(translate.core);
core.reset();
bootloader.setSuccess(coreId);


setTimeout(() => {
  bootloader.hide();
}, 500)



