import pkg from 'gulp'
const { parallel, series, watch } = pkg

import browserSync from 'browser-sync'

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/',
		},
		ghostMode: { clicks: false },
		notify: false,
		online: true,
		// tunnel: 'yousutename', // Attempt to use the URL https://yousutename.loca.lt
	})
}

function startwatch() {
	watch(['app/*.html', 'app/css/**/*.css', 'app/js/**/*.js'], { usePolling: true }).on('change', browserSync.reload)
}

export default series(parallel(browsersync, startwatch))
