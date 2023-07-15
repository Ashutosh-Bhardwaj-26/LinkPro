const express = require('express');
const router = express.Router();

const {downloadProfile,downloadLink,uploadProfile,uploadLink} = require('../Controllers/auth');

router.route('/downloadProfile').post(downloadProfile);
router.route('/downloadLink').post(downloadLink);
router.route('/uploadProfile').post(uploadProfile);
router.route('/uploadLink').post(uploadLink);

module.exports = router;