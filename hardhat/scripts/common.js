exports.ABI = [
    // IErc20 Interface
    'function name() external pure returns (string memory)',
    'function symbol() external pure returns (string memory)',
    'function decimals() external pure returns (uint8)',
    'function balanceOf(address _address) external view returns (uint256)',
    'function transfer(address to, uint256 value) external returns (bool)',
    'function approve(address spender, uint256 value) external returns (bool)',
    'function transferFrom(address from, address to, uint256 value) external returns (bool)',
    'function allowance(address owner, address spender) external view returns (uint256)',

    // Vault Interface, extends IErc20
    'function deposit(uint256 amount) external payable',
    'function withdraw(uint256 amount) external',
];

exports.ADDRESS = '0x1cD1A83C2965CB7aD55d60551877Eb390e9C3d7A';
