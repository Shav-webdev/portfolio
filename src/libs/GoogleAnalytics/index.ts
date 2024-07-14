import { ObjectLiteralType } from 'types/global.types';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

// export type EventNameType = EventNames | (string & {});

export const GA_TAG_MANAGER_ID = 'GTM-58Z3PLRX';
export const GA_MEASUREMENT_ID = 'G-8MG42DVD8Z';

export class Analytics {
  private static GA_MEASUREMENT_ID: string = GA_MEASUREMENT_ID || '';
  private static USER_ID: string | undefined = undefined;
  /** Analytics initialization
   *
   */
  static init(): void {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer?.push(arguments);
    }

    window.gtag = gtag;
    window.gtag('js', new Date());
  }

  /** General function configured for sending events to GA
   *
   * @param payload
   * @private
   *
   */
  private static sendPayloadToGA(payload: any): void {
    if (!this.GA_MEASUREMENT_ID) {
      console.error(
        'Google Analytics is not initialized. Call init() before sending events.',
      );
      return;
    }

    let payloadData: any = {
      ...payload[1],
    };

    payloadData.user_id = this.USER_ID;

    window.gtag('event', payload[0], payloadData);
  }

  /** Public user login
   *
   * @param userId
   * @param eventParams
   *
   */
  static sendPublicUserInitEventToGA(
    userId: string | undefined,
    eventParams?: any,
  ): void {
    this.USER_ID = userId;
    const payload: ObjectLiteralType = {
      event_category: 'engagement',
      event_label: 'User init',
      ...eventParams,
    };

    this.sendPayloadToGA(['user_init', { ...payload, user_id: userId }]);
  }

  /** Add UserId to dataLayer
   *
   * @param userId
   *
   */
  static addUserIdToGADataLayer(userId: string): void {
    if (!this.USER_ID) {
      this.USER_ID = userId;
      this.sendPublicUserInitEventToGA(userId);
    }

    if (typeof window === 'undefined') return;
    window.dataLayer?.push({
      user_id: userId,
    });
  }

  /** Send Contact Form submit event
   *
   * @param eventParams
   *
   */
  static sendContactFormSubmitEventToGA(eventParams?: ObjectLiteralType): void {
    const payload: ObjectLiteralType = {
      event_category: 'engagement',
      event_label: `Contact Form Submit event`,
      ...eventParams,
    };

    this.sendPayloadToGA([`contact_form_submit`, payload]);
  }

  /** Send Project view start event
   *
   * @param projectTitle
   * @param eventParams
   *
   */
  static sendProjectViewStartEventToGA(
    projectTitle: string,
    eventParams?: ObjectLiteralType,
  ): void {
    const payload: ObjectLiteralType = {
      event_category: 'engagement',
      event_label: `Project view start event - ${projectTitle}`,
      ...eventParams,
    };

    this.sendPayloadToGA([`project_view_start_${projectTitle}`, payload]);
  }

  /** Send Social Sites Button Click event
   *
   * @param socialSite
   * @param eventParams
   *
   */
  static sendSocialButtonClickEventToGA(
    socialSite: string,
    eventParams?: ObjectLiteralType,
  ): void {
    const payload: ObjectLiteralType = {
      event_category: 'engagement',
      event_label: `Social sites button click event`,
      ...eventParams,
    };
    this.sendPayloadToGA([`social_sites_button_click_${socialSite}`, payload]);
  }
}
