
import { getKcContext } from "keycloakify";

export const { kcContext } = getKcContext<
	{
		pageId: "login.ftl";
	} | 
	{
		pageId: "register.ftl";
	} |
	{
		pageId: "login-reset-password.ftl";
	} |
	{
		pageId: "login-update-password.ftl";
	}
>({
	/* Uncomment to test outside of keycloak, ⚠️ don't forget to run 'yarn keycloak' at least once */
	//"mockPageId": "login.ftl",
    //"mockPageId": "register.ftl",	
	//"mockPageId": "login-reset-password.ftl",
	//"mockPageId": "login-update-password.ftl"
});

export type KcContext = NonNullable<typeof kcContext>;