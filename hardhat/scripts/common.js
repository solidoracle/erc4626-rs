exports.ABI_VAULT = [
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
    'function setAsset(address asset_address) external',
    'function asset() external view returns (address)',
];

exports.ADDRESS_VAULT = '0x6982aA8dB18E7153c614765dA4A581135e9Bf4a8';


exports.ABI_WETH = [
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
    'function setAsset(address asset_address) external'
];

exports.ADDRESS_WETH = '0xa9a04d0C22B6f264BC72a108d124f25BD199c928';
