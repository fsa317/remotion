import {initializeRenderCli} from './initialize-render-cli';
import {Log} from './log';
import {parsedCli} from './parse-command-line';
import {prepareEntryPoint} from './prepare-entry-point';

export const bundleCommand = async () => {
	const file = parsedCli._[1];

	if (!file) {
		Log.error('No entry point specified. Pass more arguments:');
		Log.error('   npx remotion bundle [entry-point]');
		Log.error('Documentation: https://www.remotion.dev/docs/render');
		process.exit(1);
	}

	await initializeRenderCli('bundle');

	const {urlOrBundle} = await prepareEntryPoint(file, []);

	Log.info();
	Log.info(urlOrBundle);
};