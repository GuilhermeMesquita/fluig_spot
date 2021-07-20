function verifyIfUserIsProcessManager(colleagueId, groupId) {

    var result = false;

    var colleagueGroup_c1 = DatasetFactory.createConstraint(
        "colleagueId",
        colleagueId,
        colleagueId,
        ConstraintType.MUST);

    var colleagueGroup_c2 = DatasetFactory.createConstraint(
        "groupId",
        groupId,
        groupId,
        ConstraintType.MUST);

    var colleagueGroup_array_constraints = [
        colleagueGroup_c1,
        colleagueGroup_c2
    ]

    var colleagueGroup = DatasetFactory.getDataset(
        "colleagueGroup",
        null,
        colleagueGroup_array_constraints,
        null);

    if (colleagueGroup.length > 0) {

        for (var i = 0; i < colleagueGroup.length; i++) {

            var colleagueGroupColleagueId = colleagueGroup.values[i]["colleagueGroupPK.colleagueId"]
            var colleagueGroupGroupId = colleagueGroup.values[i]["colleagueGroupPK.groupId"]

            if (colleagueId == colleagueGroupColleagueId && groupId == colleagueGroupGroupId) {

                result = true;

            }
        }
    }

    return result;
}