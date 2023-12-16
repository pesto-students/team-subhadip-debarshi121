const {assetService} = require("../services");

const createAsset = async (req, res) => {
	try {
		const {name, value, type} = req.body;
		const asset = await assetService.create(req.user._id, type, name, value);
		return res.status(201).json({asset});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const getAssets = async (req, res) => {
	try {
		const assets = await assetService.getAll(req.user._id);
		return res.status(201).json({assets});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const deleteAsset = async (req, res) => {
	try {
		const asset = await assetService.getAssetById(req.params.id);

		if (asset) {
			if (asset.UserId.toString() !== req.user._id) {
				return res.status(403).json({error: "You are not authorized to perform this!"});
			}
			await assetService.deleteAssetById(req.params.id);
			return res.status(200).json({message: "Asset deleted!"});
		}
		return res.status(404).json({error: "Asset not found!"});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const updateAsset = async (req, res) => {
	try {
		const asset = await assetService.getAssetById(req.params.id);

		if (asset) {
			if (asset.UserId.toString() !== req.user._id) {
				console.log(asset.UserId, req.user._id);
				return res.status(403).json({error: "You are not authorized to perform this!"});
			}
			asset.set({
				...asset,
				...req.body,
			});
			await asset.save();
			return res.status(200).json(asset);
		}
		return res.status(404).json({error: "Asset not found!"});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

module.exports = {
	createAsset,
	getAssets,
	deleteAsset,
	updateAsset,
};
