function GetComputerName() {
    const network = new ActiveXObject('WScript.Network');
    return network.computerName;
}
