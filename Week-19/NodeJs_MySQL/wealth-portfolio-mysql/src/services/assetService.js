const { Asset } = require("../models");

const getAssetById = async (id) => {
	try {
		const asset = await Asset.findByPk(id);
		return asset;
	} catch (error) {
		throw error;
	}
};

const getAll = async (UserId) => {
	try {
		const assets = await Asset.findAll({ where: { UserId } });
		return assets;
	} catch (error) {
		throw error;
	}
};

const create = async (UserId, type, name, value) => {
	try {
		const asset = await Asset.create({
			UserId,
			type,
			name,
			value,
		});
		return asset;
	} catch (error) {
		throw error;
	}
};

const deleteAssetById = async (id) => {
	try {
		await Asset.destroy({
			where: { id },
		});
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAll,
	create,
	getAssetById,
	deleteAssetById,
};
