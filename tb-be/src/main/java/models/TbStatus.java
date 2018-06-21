package models;

import java.util.List;

public class TbStatus {

    private BasicInfo basicInfo;
    private List<Team> statuses;
    private AddressInformation addressInformation;

    public TbStatus() {
    }

    public List<Team> getStatuses() {
        return statuses;
    }

    public void setStatuses(List<Team> statuses) {
        this.statuses = statuses;
    }

    public AddressInformation getAddressInformation() {
        return addressInformation;
    }

    public void setAddressInformation(AddressInformation addressInformation) {
        this.addressInformation = addressInformation;
    }

    public BasicInfo getBasicInfo() {
        return basicInfo;
    }

    public void setBasicInfo(BasicInfo basicInfo) {
        this.basicInfo = basicInfo;
    }
}
