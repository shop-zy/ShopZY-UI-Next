import React, { Suspense } from "react";

import AuthCallback from "./callback";

function page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<AuthCallback />
			</div>
		</Suspense>
	);
}

export default page;
