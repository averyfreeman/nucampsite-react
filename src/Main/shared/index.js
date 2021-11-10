import Header from 'Main/Header/Header';
// import Header from 'Main/Header/Header';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import Jumbotron from 'Main/Header/Jumbotron/Jumbotron';
import ModeSwitch from 'Main/Header/Jumbotron/ModeSwitch/ModeSwitch';
import Footer from 'Main/Footer/Footer';
import Home from 'Main/pages/Home/Home';
import Directory from 'Main/pages/Directory/Directory';
import Contact from 'Main/pages/Contact/Contact';
import About from 'Main/pages/About/About';
import Campsite from 'Main/pages/Directory/Campsite/Campsite';
import Comments from 'Main/pages/Directory/Comments/Comments';
import data from 'Main/shared/data';
import { selectItem } from 'Main/shared/util/helpers';

const exports = {
	components: {
		About,
		BCrumbHeading,
		Campsite,
		Comments,
		Contact,
		Directory,
		Footer,
		Header,
		Home,
		Jumbotron,
		ModeSwitch,
	},
	lists: {
		data,
	},
	helpers: {
		selectItem,
	},
	redux: {},
};

export default exports;
