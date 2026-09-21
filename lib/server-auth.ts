import {
  chatGPTSignInPath,
  chatGPTSignOutPath,
  getChatGPTUser,
  requireChatGPTUser,
  type ChatGPTUser,
} from "@/app/chatgpt-auth";

/**
 * Единая граница серверной аутентификации.
 *
 * Сейчас адаптер использует SIWC платформы Sites. При переносе на серверы
 * организации здесь подключается корпоративный OIDC-провайдер; маршруты API
 * и прикладная логика при этом не меняются.
 */
export type AuthenticatedUser = ChatGPTUser;
export const getAuthenticatedUser = getChatGPTUser;
export const requireAuthenticatedUser = requireChatGPTUser;
export const authenticatedSignInPath = chatGPTSignInPath;
export const authenticatedSignOutPath = chatGPTSignOutPath;

