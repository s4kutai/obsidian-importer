import { PickedFile } from '../../filesystem';
import { TagSeparatorReplaceOptions } from './models';

export interface YarleOptions {
	enexSources: PickedFile[];
	templateFile?: string;
	currentTemplate?: string;
	outputDir?: string;
	isMetadataNeeded?: boolean;
	isNotebookNameNeeded?: boolean;
	isZettelkastenNeeded?: boolean;
	useZettelIdAsFilename?: boolean;
	plainTextNotesOnly?: boolean;
	skipLocation?: boolean;
	skipCreationTime?: boolean;
	skipUpdateTime?: boolean;
	skipSourceUrl?: boolean;
	skipWebClips?: boolean;
	skipReminderTime?: boolean;
	skipReminderOrder?: boolean;
	skipReminderDoneTime?: boolean;
	skipTags?: boolean;
	useHashTags?: boolean;
	replaceWhitespacesInTagsByUnderscore?: boolean;
	skipEnexFileNameFromOutputPath?: boolean;
	haveEnexLevelResources?: boolean;
	haveGlobalResources?: boolean;
	keepMDCharactersOfENNotes?: boolean;
	urlEncodeFileNamesAndLinks?: boolean;
	sanitizeResourceNameSpaces?: boolean;
	replacementChar?: string;
	monospaceIsCodeBlock?: boolean;
	dateFormat?: string;
	nestedTags?: TagSeparatorReplaceOptions;
	keepImageSize?: boolean;
	keepOriginalAmountOfNewlines?: boolean;
	generateNakedUrls?: boolean;
	addExtensionToInternalLinks?: boolean;
	pathSeparator?: string;
	resourcesDir?: string;
	turndownOptions?: Record<string, any>;
	obsidianTaskTag?: string;
	useUniqueUnknownFileNames?: boolean;
}
