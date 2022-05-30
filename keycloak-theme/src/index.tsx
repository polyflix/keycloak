import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { App } from "./App";
import { LoadingLayout } from "./core/layouts/Loading/Loading.layout";
import i18n from "./i18n/config";
import { KcApp } from "./KcApp";
import { kcContext } from "./KcApp/kcContext";
import { ThemeConfig } from "./theme/theme";

ReactDOM.render(
  <Suspense fallback={<LoadingLayout />}>
    <ThemeConfig>
      <I18nextProvider i18n={i18n}>
        {kcContext === undefined ? <App /> : <KcApp kcContext={kcContext} />}
      </I18nextProvider>
    </ThemeConfig>
  </Suspense>,
  document.getElementById("root")
);
