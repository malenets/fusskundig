import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
	return (
		<CookieConsent
			location="bottom"
			buttonText="Ich stimme zu"
			cookieName="Fußkundig"
			style={{ background: '#505559', fontSize: '12px' }}
			buttonStyle={{ color: '#505559', fontWeight: 'bold', background: '#fff' }}
			expires={150}
			onAccept={() => {
				alert('Thanks');
			}}
		>
			Fußkundig verwendet Cookies, um Ihnen den bestmöglichen Service zu gewährleisten. Wenn Sie auf der Seite
			weitersurfen stimmen Sie der Cookie-Nutzung zu.
		</CookieConsent>
	);
};

export default Cookie;
